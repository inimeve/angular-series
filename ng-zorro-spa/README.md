# NgZorroSpa

## Build image

```bash
docker build -t inimeve/ng-zorro-spa:local .
```

## Run image

```bash
docker run --name ng-zorro-spa -p 1234:80 --rm inimeve/ng-zorro-spa:local
```

## Load image to KinD

```bash
kind load docker-image inimeve/ng-zorro-spa:local
```
