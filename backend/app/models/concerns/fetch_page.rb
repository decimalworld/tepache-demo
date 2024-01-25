module FetchPage
  extend ActiveSupport::Concern

  module ClassMethods
    def fetch_page(options = {})
      offset_paginate(options)
    end

    def basic_options(options = {})
      @options = options
    end

    def offset_paginate(options = {})
      page_option = options[:page].to_i
      per_option = options[:per].to_i if options[:per].to_i.positive?

      page(page_option).per(per_option)
    end
  end
end
