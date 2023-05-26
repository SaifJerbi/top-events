# FDJ Top Events 

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

This document contains the developer guide and how to start contributing to this project or using the exposed API.

All technical documentation is provided in this file

## Setting Up your dev environnement
### Requirements

To start developing in this project you the required tools installed

- NodeJS: node 16 +
- git: 2 +
- VS CODE
- MongoDb

### Optionals
- Docker & Docker-compose

### Repository structure

The current project was generated using [NX](https://nx.dev). It provide a set of tools to handle multi apps and library inside the same repository.

The different apps are generated under the apps directory. Libs are generated under the libs directory. The schema below demonstrate the current structures and apps

```
  -- apps
      -- api               # the NestJs app that provide the REST API 
      -- top-paris         # the Angular App to display top events
  -- libs
      -- models            # the models folder that contains DTO used by front & back

```

## Quick Run

I think that a quick run is premordial at this point

You need docker and docker-compose installed in your machine, once ready, just run the commands bellow:

```shell

# Run docker compose to start the magic show
docker-compose up

# Go to http://localhost:8080/ 

```

## Important to know

The top-events app displays data retrieved from https://www.pointdevente.parionssport.fdj.fr , stored and provided by the api app

The api app is reponsible for collecting data from this fdj website and inject it to mongoDb instance. To run the collect action please call the rest endpoint below:

> FYI: an automatic task is implemented to run after the app startup. It will collect data for the first time. Then, the task will re-run every 5 minutes

```
# the API call is optional, you can skip this step, data should be already collected by the task schedular

POST http://localhost:8080/api/top
```


## Development server

### Requirements:

Install the workspace dependencies by running `npm install

### Front
Run `start:front` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Back

Run `start:api` for a dev server. 

API's are served her: http://localhost:3000/api. The app will automatically reload if you change any of the source files.

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Further help

Please contact me.
