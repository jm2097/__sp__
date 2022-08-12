export class HttpClient {
  async get(url: string) {
    return (await fetch(url)).json();
  }
}
