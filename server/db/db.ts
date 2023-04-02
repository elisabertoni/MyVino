import connection from './connection'
import { Producer } from '../../models/producer'
import { Bottle } from '../../models/bottle'

// Bottles functions
export function getAllBottles(db = connection): Promise<Bottle[]> {
  return db('bottles').select()
}

export function addBottle(newBottle: Bottle, db = connection): Promise<Bottle[]> {
  return db('bottles').insert({...newBottle})
}

export function updateBottle(id: number, updatedBottle: Bottle, db = connection): Promise<Bottle[]> {
  return db('bottles')
    .update(updatedBottle)
    .where('id', id)
    .returning(['id', 'label', 'varietal', 'producer_id', 'region', 'year', 'alcohol_percentage', 'bottle_size', 'price', 'picture'])
    .then((result) => result[0])
}

export function deleteBottle(id: number, db = connection) {
  return db ('bottles').where('id', id).del()
}

//Producers functions
export function getAllProducers(db = connection): Promise<Producer[]> {
  return db('producers').select()
}

export function addProducer(newProducer: Producer, db = connection): Promise<Producer[]> {
  return db('producers').insert({...newProducer})
}

export function updateProducer(id: number, updatedProducer: Producer, db = connection): Promise<Producer[]> {
  return db('producers')
    .update(updatedProducer)
    .where('id', id)
    .returning(['id', 'name', 'country', 'region'])
    .then((result) => result[0])
}

export function deleteProducer(id: number, db = connection) {
  return db ('producers').where('id', id).del()
}