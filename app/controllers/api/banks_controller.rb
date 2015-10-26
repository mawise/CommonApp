class Api::BanksController < ApiController
  before_action :require_logged_in!
  
  def create
    @application = current_user.application
    @bank = @application.banks.new(bank_params)
    render json: @bank 
  end

  def show
    @bank = Bank.find(params[:id])
    @application = @bank.application
    check_identity!
    render json: @bank
  end

  def destroy
    @bank = Bank.find(params[:id])
    @application = @bank.application
    check_identity!
    if @bank.destroy
      render json: @bank 
    else
      render json: @bank.errors.full_messages
    end
  end

  private

  def bank_params
    params.require(:bank).permit(:name, :address, :account_number)
  end
end
