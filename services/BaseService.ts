abstract class BaseService {
  url: string;
  basePath: string;

  constructor(url, basePath) {
    this.url = url;
    this.basePath = basePath;
  }

  async get() {
    return fetch(`${this.url}${this.basePath}`)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .catch(() => []);
  }

  async getById(id: unknown) {
    return fetch(`${this.url}${this.basePath}/${id}`).then((response) =>
      response.json()
    );
  }

  async post(object: unknown) {
    return fetch(`${this.url}${this.basePath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    }).then((response) => response.json());
  }
}

export default BaseService;
