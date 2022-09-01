# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

User.destroy_all

User.create(name: "Rob", age: 23, password_digest: BCrypt::Password.create('Rob'))
User.create(name: "Charlie", age: 19, password_digest: BCrypt::Password.create('Charlie'))
User.create(name: "Leah", age: 17, password_digest: BCrypt::Password.create('Leah'))
User.create(name: "Hannah", age: 24, password_digest: BCrypt::Password.create('Hannah'))
User.create(name: "Lucas", age: 15, password_digest: BCrypt::Password.create('Lucas'))
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
