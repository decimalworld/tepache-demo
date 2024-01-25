class ApplicationRecord < ActiveRecord::Base
  include FetchPage
  primary_abstract_class
end
