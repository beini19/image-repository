Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :users do 
  # end
  # resources :image do 
  # end

  get "users/:id", to: "user#show"
  get "content", to: "image#index"
  get "content/:id", to: "image#show"
end
