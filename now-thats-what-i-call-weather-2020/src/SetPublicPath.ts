// @typescript-eslint-disable
function getUrl(): Promise<string> {
  return ((window as any).System).resolve(process.env.APP_MODULE_NAME).then((url: any) => {
    return url;
  });
}

const startIndex = 0;
const offset = 1;

export async function getWebpackUrl(): Promise<string> {
  const url = await getUrl();

  return url.slice(startIndex, url.lastIndexOf("/") + offset);
}

// For lazy loading within an application to work you need to set webpack's public path
// Basically webpack's internal module system always looks for code-splits (modules) at the root
export default function setPublicPath(): any {
  // eslint-disable-next-line
  return Promise.all([getUrl()]).then(values => {
    const [url] = values;
    const webpackPublicPath = url.slice(startIndex, url.lastIndexOf("/") + offset);
    // eslint-disable-next-line
    __webpack_public_path__ = webpackPublicPath;
    return true;
  });
}
