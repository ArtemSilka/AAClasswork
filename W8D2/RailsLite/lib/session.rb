require 'json'

class Session
  # find the cookie for this app
  # deserialize the cookie into a hash
  def initialize(req)
    # my_cookie = req.cookies.find { |cookie| cookie[:name] == "_rails_lite_app" }
    my_cookie = req.cookies.find { |cookie| cookie.try(:name) == "_rails_lite_app" }
    if JSON.parse(my_cookie.value)
      @session = my_cookie
    else
      {}
    end
  end

  def [](key)
    @session[key]
  end

  def []=(key, val)
    @session[key] = val
  end

  # serialize the hash into json and save in a cookie
  # add to the responses cookies
  def store_session(res)
  end
end
