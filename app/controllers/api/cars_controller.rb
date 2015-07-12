class Api::CarsController < ApplicationController
  def create

  end

  def show
    @car = Car.find(params[:id])
    render json: @car
  end

  def destroy

  end
end
