class Api::BanksController < ApplicationController
  def create

  end

  def show
    @bank = Bank.find(params[:id])
    render json: @bank
  end

  def destroy

  end
end
