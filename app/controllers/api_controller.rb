class ApiController < ApplicationController
  def check_identity!
    render "Unauthorized access" unless current_user.id == @application.user_id
  end
end

