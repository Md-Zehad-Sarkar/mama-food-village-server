import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';
import { app } from './app';
let server: Server;

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URI as string);
    server = app.listen(config.Port, () => {
      console.log(
        `Mama-Food-Village server running on http://localhost:${config.Port} time:${new Date().toLocaleTimeString()} ${new Date().toLocaleDateString()}`,
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
// close and exit server on unhandledRejection
process.on('unhandledRejection', () => {
  console.log(`unhandledRejection is detected, shutting down the server`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

//close server on uncaughtException
process.on('uncaughtException', () => {
  console.log(`uncaughtException is detected, shutting down the server`);
  process.exit(1);
});
