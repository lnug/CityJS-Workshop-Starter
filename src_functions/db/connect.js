import mongoose from 'mongoose';
let isConnected;


export default () => {
  if (isConnected) {
    // eslint-disable-next-line no-console
    console.log('=> using existing database connection');
    return Promise.resolve();
  }
  // eslint-disable-next-line no-console
  console.log('=> using new database connection');
  return mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then(db => { 
      isConnected = db.connections[0].readyState;
    }).catch(e => Promise.reject(e));
}