class Api::ReferencesController < ApiController
  def create

  end

  def show
    @reference = Reference.find(params[:id])
    render json: @reference
  end

  def destroy

  end
end
