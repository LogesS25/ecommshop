// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//this api folder essential servers as an essential serves as entire backend 
//of the application

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
