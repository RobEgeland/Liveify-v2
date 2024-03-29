Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'
  resources :users, only: [:create, :index]
  resources :concerts
  resources :artists, only: [:index, :show, :create]
  resources :performances, only: [:index]
  resources :genres, only: [:index]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current-user', to: 'users#get_current_user'
  get '/users/:age', to: 'users#age_limit'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) {!req.xhr? && req.format.html?}
  # Defines the root path route ("/")
  # root "articles#index"
end
