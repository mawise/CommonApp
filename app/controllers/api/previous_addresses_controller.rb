class Api::PreviousAddressesController < ApiController
  def create

  end

  def show
    @previous_address = PreviousAddress.find(params[:id])
    render json: @previous_address
  end

  def destroy

  end
end
