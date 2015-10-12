class Api::EmployersController < ApiController
  def create

  end

  def show
    @employer = Employer.find(params[:id])
    render json: @employer
  end

  def destroy

  end
end
