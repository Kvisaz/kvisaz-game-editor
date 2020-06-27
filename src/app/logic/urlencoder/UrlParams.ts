export class UrlParams {
  static getVars(url: string): IStringMap {
    const params = {};
    const parts = url.split('?');
    // take after '?'
    const searchParts = parts[1];
    if (searchParts == null || searchParts.trim().length == 0) {
      return params;
    }

    // take before '#'
    const search = searchParts.split('#')[0];
    if (search == null || search.trim().length == 0) {
      return params;
    }

    search.split('&')
      .forEach(paramStr => {
        console.log('........paramStr', paramStr);
        const pair = paramStr.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
      });

    return params;
  }

  static getUrl(baseUrl: string, params: IStringMap): string {
    const paramsStr: Array<string> = [];

    Object.keys(params).forEach(key => {
      paramsStr.push(`${key}=${params[key]}`);
    });

    const search = paramsStr.join('&');
    const delim = search.length > 0 ? '?' : '';
    return baseUrl + delim + search;
  }
}

// объект, в котором все поля строковые
interface IStringMap {
  [key: string]: string;
}
