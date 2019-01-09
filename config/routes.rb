Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "users", to: "user#show"
  post "content", to: "image#show"
end
