class ConcertsController < ApplicationController
    def index 
        concerts = Concert.all 
        render json: concerts, include: [:artists]
    end
end
