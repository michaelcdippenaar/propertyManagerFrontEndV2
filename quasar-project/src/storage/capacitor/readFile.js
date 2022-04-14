import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export default async (name) => {
  const contents = await Filesystem.readFile({
    path: name,
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
  });

  console.log('secrets:', contents);
};




