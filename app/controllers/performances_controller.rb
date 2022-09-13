class PerformancesController < ApplicationController

    def index 
        performances = Performance.all 
        render json: performances, status: :ok
    end
end
