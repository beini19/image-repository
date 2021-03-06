# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

json = ActiveSupport::JSON.decode(File.read('db/data.json'))
User.destroy_all
Image.destroy_all

user_data = []
image_data = []

# read each json object
json.each do |item|
    # user_info = item.user
    user_data = {
        "_id": item["_id"],
        "index": item["index"],
        "guid": item["guid"],
        "name": item["user"]["name"],
        "gender": item["user"]["gender"],
        "age": item["user"]["age"],
        "email": item["user"]["email"],
        "phone": item["user"]["phone"],
        "address": item["user"]["address"],
        "registered": item["user"]["registered"]
    }
    user_object = User.create!(user_data)

    image_data = {
        "picture": item["picture"],
        "likes": item["likes"],
        "comments": item["comments"],
        "tags": item["tags"],
        "user_id" => user_object.id
    }
    Image.create!(image_data)
end