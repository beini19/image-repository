Rails.application.routes.draw do
  resources :user, only: %i[index show create]
  resources :image, only: %i[index show create]

  post "image/batch", to: "image#create_batch"
  get "inventory/:id", to: "image#get_inventory"
  post "inventory/:id", to: "image#set_inventory"
  get "price/:id", to: "image#get_price"
  post "price/:id", to: "image#set_price"
end
