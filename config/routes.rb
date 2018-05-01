Rails.application.routes.draw do
  resources :products
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    post 'authenticate', to: 'authentication#authenticate'
    get 'me', to: 'me#index'
    resources :units
  end

  get '*path', to: 'application#fallback_index_html', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end
