class Api::SessionsController < ApplicationController
  def create
    # debugger
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    # debugger
    if @user.nil?
      # debugger
      render json: ['Ops! Wrong credentials!'], status: 401
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user
        logout!
        render json: {}
    else
        render json: ['No current user to logout'], status: 404
    end
  end
end
