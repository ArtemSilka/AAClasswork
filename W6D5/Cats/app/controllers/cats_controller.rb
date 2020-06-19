class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render :index
    end

    def show
        @cat = Cat.find(params[:id])
        @age = @cat.age(@cat.birth_date)
        render :show
    end
end