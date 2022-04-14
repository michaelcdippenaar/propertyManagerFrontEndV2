import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

export default async function (jsonObj, name) {
  await Filesystem.writeFile({
    path: name,
    data: jsonObj,
    directory: Directory.Documents,
    encoding: Encoding.UTF8,
  });
}
