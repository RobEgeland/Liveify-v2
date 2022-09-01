Rails.application.routes.draw do
  get '/hello', to: 'application#hello_world'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) {!req.xhr? && req.format.html?}
  # Defines the root path route ("/")
  # root "articles#index"
end
