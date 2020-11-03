export class Http {
  static KEY = '5f9d8105231ba42851b49fe4';

  static HEADERS = { 
    'Content-Type': 'application/json',
    'x-apikey' : Http.KEY
  }

  static URL = 'https://chapters-f578.restdb.io/rest/chapters/5f9d80c68ab8f844000080b7';

  static async get() {
    try {
      return await request('GET')
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  static async post(data = {}) {
    try {
      return await request('POST', data)
    } catch (e) {
      console.log(e)
    }
  }

  static async delete() {
    try {
      return await request('DELETE')
    } catch (e) {
      console.log(e)
    }
  }

  static async put(data = {}) {
    try {
      console.log('zzz');
      return await request('PUT', data)
    } catch (e) {
      console.log(e)
    }
  }
}

async function request(method = 'GET', data) {
  const config = {
    method,
    headers: Http.HEADERS
  }

  const url = Http.URL;

  if (method === 'POST' || method === 'PUT') {
    config.body = JSON.stringify(data)
  }

  const response = await fetch(url, config)
  return await response.json()
}
