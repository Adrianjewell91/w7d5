class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true, uniqueness: true
end

#Some Seed Data
# Bench.create(description:'awesome1', lat:37.781499, lng:-122.438725)
# Bench.create(description:'awesome2', lat:37.757393, lng:-122.415474)
# Bench.create(description:'awesome3', lat:37.771099, lng:-122.432382)
# Bench.create(description:'awesome4', lat:37.787855, lng:-122.462423)
# Bench.create(description:'awesome5', lat:37.736286, lng:-122.456758)
