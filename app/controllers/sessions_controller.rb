class SessionsController < ApplicationController
  before_action :ensure_logged_out, only: :new

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(
      email: params[:user][:email],
      password: params[:user][:password]
    )

    if @user
      log_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ['Invalid username or password']
      @user = User.new(email: params[:user][:email])
      render :new
    end
  end

  def destroy
    log_out
    render nothing: true
  end

  private

  def ensure_logged_out
    unless !current_user
      flash[:messages] = ['log out before logging in']
      redirect_to root_url
    end
  end
end
