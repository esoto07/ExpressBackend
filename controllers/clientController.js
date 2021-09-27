import mongoose from 'mongoose'
import Client from '../models/clientModel.js'
import Address from '../models/addressModel.js'

// @desc    Fetch all Clients
// @route   GET /api/clients
// @access  Public
const getClients = async (req, res) => {
  const clients = await Client.find({})
  res.json(clients)
}
// @desc    Fetch all Addresses
// @route   GET /api/clients/address
// @access  Public
const getAddresses = async (req, res) => {
  const addresses = await Address.find({})
  res.json(addresses)
}

// @desc    Fetch single client
// @route   GET /api/client/:id
// @access  Public
const getClientById = async (req, res) => {
  const client = await Client.findById(req.params.id)

  if (client) {
    res.json(client)
  } else {
    res.status(404)
    throw new Error('Client not found')
  }
}

// @desc    Create single client
// @route   POST /api/client
// @access  Public
const newClient = async (req, res) => {
  const { name, lastname } = req.body

  const client = new Client({
    name,
    lastname,
  })

  const address = new client.save()

  res.status(200).send('Success')
}

// @desc    Create single address
// @route   POST /api/clients/address
// @access  Public
const newAddress = async (req, res) => {
  const { client, street, number, province, sector } = req.body

  const address = new Address({
    client: mongoose.Types.ObjectId(client),
    street,
    number,
    province,
    sector,
  })

  address.save()

  res.status(200).send('Success')
}

// @desc    Fetch all Address by Client Id
// @route   GET /api/clients/address/:id
// @access  Public
const getAddressByClientId = async (req, res) => {
  const clientId = req.params.id
  const address = await Address.find({
    client: mongoose.Types.ObjectId(clientId),
  })

  if (address) {
    res.json(address)
  } else {
    res.status(404)
    throw new Error('Client not found')
  }
}
// @desc    Detele Address by Id
// @route   DELETE /api/clients/address/:id
// @access  Public
const deleteAddress = async (req, res) => {
  const address = await Address.findByIdAndDelete(req.params.id)

  if (address) {
    res.json(address)
  } else {
    res.status(404)
    throw new Error('Client not found')
  }
}

export {
  getClients,
  getClientById,
  newClient,
  newAddress,
  getAddressByClientId,
  deleteAddress,
  getAddresses
}
