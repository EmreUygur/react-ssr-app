import { FileListWithDirectory } from './types';

const fs = require('fs');
const path = require('path');

const pagesDirectoryPath = path.resolve(__dirname, '..', 'src', 'views');

const detectFilesWithDirectories = async (
  directory: string
): Promise<FileListWithDirectory[]> => {
  let fileList: FileListWithDirectory[] = [];

  const files = await fs.promises.readdir(directory, { withFileTypes: true });

  for (let i = 0; i < files.length; i++) {
    if (files[i].isDirectory()) {
      const dir = path.resolve(directory, files[i].name);
      fileList = [...fileList, ...(await detectFilesWithDirectories(dir))];
    } else {
      fileList.push({ file: files[i].name, directory });
    }
  }
  return fileList;
};

detectFilesWithDirectories(pagesDirectoryPath)
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
