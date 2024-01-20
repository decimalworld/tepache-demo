Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :products do
    resources :flavors, only: :create
  end
end
