import express from "express"
import FMSrecoredmodel from "../model/FMSrecored.js"
const route = express.Router()

route.get("/getuserbyid/:userid", async (req, res) => {
  try {
    const { userid } = req.params
    const FMSrecored = await FMSrecoredmodel.find({ userID: userid })
    if (FMSrecored.length === 0) {
      res.status(401).json({ message: "no data found" })
    }
    res.status(200).json(FMSrecored)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "internal server error" })
  }
})
route.post("/", async (req, res) => {
  try {
    const NEWrecoreduse = req.body
    const newrecored = new FMSrecoredmodel(NEWrecoreduse)
    const recoreded = await newrecored.save()
    res.status(200).json(recoreded)

  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: "internal server error", error: error.message })
  }
})
route.put("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const NEWrecoreduse = req.body
    const recored = await FMSrecoredmodel.findByIdAndUpdate(id, NEWrecoreduse, { new: true })
    if (!recored) {
      res.status(401).json({ message: "no data found" })
    }
    res.status(200).json(recored)

  } catch (error) {
    console.log(error.message)
    res.status(500).json("internal server error")
  }
})
route.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id
    const recored = await FMSrecoredmodel.findByIdAndDelete(id)
    if (!recored) {
      res.status(401).json({ message: "no data found" })
    }
    res.status(200).json(recored)

  } catch (error) {
    console.log(error.message)
    res.status(500).json("internal server error")
  }
})


export default route