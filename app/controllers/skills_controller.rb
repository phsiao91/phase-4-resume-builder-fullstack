class SkillsController < ApplicationController

    def create
        skill = @current_user.skills.create(skill_params)
        if skill.valid?
            render json: skill, status: :ok
        else
            render json: {error: "PLease fill out all forms"}, status: :expectation_failed
        end
    end

    def show
        render json: @current_user.skills, status: :ok
    end

    def index
        render json: @current_user.skills.last, status: :ok
    end

    def destroy
        skill = Skill.find_by(id: params[:id])
        skill.destroy
        head :no_content
    end

    private

    def skill_params
        params.permit(:expertise, :rating, :user_id)
    end
end
