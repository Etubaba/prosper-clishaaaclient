class Local {
  set = (key: string, data: any) => {
    localStorage.setItem(key, data);
  };
  get = (key: string) => {
    return localStorage.getItem(key);
  };

  remove = (key: string) => {
    localStorage.removeItem(key);
  };

  static instance = new Local();
}
const LocalClass = Local.instance;

export default LocalClass;
// export default new Local()'
// eslint-disable-next-line import/no-anonymous-default-export
// export default new Local();;
