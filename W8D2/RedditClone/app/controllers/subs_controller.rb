class SubsController < ApplicationController
    before_action :ensure_logged_in, expect: [:index, :show]
    before_action :current_user, only: [:edit, :update]

    def new 
        @sub = Sub.new  
        render :new 
    end 

    def show 
        @sub = Sub.find_by(id: params[:id]) # why not use find(params[:id])
        render :show 
    end 

    def index 
        @subs = Sub.all 
        render :index 
    end 

    def create 
        @sub = Sub.class.new(sub_params)
        if @sub.save 
            redirect_to sub_url(@sub) 
        else 
            flash.now[:errors] = @subs.errors.full_messages 
            render :new 
        end 
    end 

    def edit # (PATCH) <-- updates info in db 
        @sub = Sub.find(params[:id])
        render :edit 
    end 

    def update # (PUT) <-- creates new entry in db ??, our custom method 
        @sub = Sub.find(params[:id])
        if @sub.update(sub_params) # rails method 
            redirect_to sub_url(@sub)
        else
            flash.now[:errors] = @sub.errors.full_messages 
            render :edit 
        end
    end 

    private 

    def sub_params 
        params.require(:sub).permit(:title, :description)
    end 
end
