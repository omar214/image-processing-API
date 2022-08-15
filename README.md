# image-processing-API

### 🚩About<a name = "about"></a>

first project for **udaacity advanced full-stack nano-degree**

it's a simple image processing API that can be used to process images.

## 🏁Scripts <a name = "Scripts"></a>

- `npm run build` to compile ts files
- `npm run test` to run the test
- `npm run start` to start the server
- `npm run dev` to start development
- `npm run format` to run prettier
- `npm run lint` to run the linter
- `npm run lint:fix` to run the linter to fix

## API <a name = "API"></a>

`{baseURL}/api/image?imageName=<image Name>&&width=<width>&&height=<height>`

query parameters:
**imageName**: the name of the image
**width**: the width of the image
**height**: the height of the image

## 🏁Getting Started <a name = "start"></a>

1. **_Clone the repository_**

```bash
git clone https://github.com/omar214/image-processing-API.git
```

2. **_Go to the directory of the repository_**

```bash
cd image-processing-API
```

3. **install dependencies**

```bash
npm install

```

4.**add `.env` file**

```js
PORT = 5000;
```

5. **_Run the server_**

```bash
npm start
```

## TODOs

- [x] configute TS
- [x] configute prettier
- [x] configute ESLint
- [x] api route

  - [x] validate request
  - [x] validate is image exists
  - [x] do resize logic
  - [x] handle path better way

- [x] do cache logic

  - [x] if 1st time do resize
  - [x] if not first time send the cached image

- [x] send the file
- [x] handle if cached file is not found
- [x] configure jasmine
- [x] add tests
- [ ] status code 304 when image is cached

- [x] lint
- [x] format
- [x] build
- [x] documentation
