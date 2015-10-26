class Api::EmergenciesController < ApiController
  def create

  end

  def show
    @emergency = Emergency.find(params[:id])
    render json: @emergency
  end

  def destroy

  end
end
