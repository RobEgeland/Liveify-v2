class ConcertsController < ApplicationController
    def index 
        concerts = Concert.all 
        render json: concerts, include: [:artists, :user]
    end
end
