import dotenv from 'dotenv'

export default function configuration() {
  dotenv.config()

  //validasi APP_NAME
  if(!process.env.APP_NAME) {
      console.error('require environment variables.');
      process.exit(1)
  }
}
