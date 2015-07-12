class Api::DebtsController < ApplicationController
  def create

  end

  def show
    @debt = Debt.find(params[:id])
    render json: @debt
  end

  def destroy

  end
end
