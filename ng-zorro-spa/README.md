# NgZorroSpa

## Build image

```bash
docker build -t {image-name} .
```

## Run image

```bash
docker run --name ng-zorro-spa -p 8080:80 --rm {image-name}
```

## Load image to KinD

```bash
kind load docker-image {image-name}
```
