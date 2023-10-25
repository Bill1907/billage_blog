import {
  getModelForClass,
  modelOptions,
  prop,
  ReturnModelType,
} from '@typegoose/typegoose'

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
class Blog {
  @prop()
  public title?: string

  @prop({ type: () => [String] })
  public tags?: string[]

  @prop()
  public content?: string

  @prop({ default: Date.now })
  public createdAt?: Date

  public static getBlogs(
    this: ReturnModelType<typeof Blog>,
    page: number,
    limit: number,
  ) {
    return this.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()
  }
  public static async getBlogById(
    this: ReturnModelType<typeof Blog>,
    id: string,
  ) {
    return await this.findById(id).exec()
  }
  public static async createBlog(
    this: ReturnModelType<typeof Blog>,
    title: string,
    tags: string[],
    content: string,
  ) {
    return await this.create({ title, tags, content })
  }
  public static async updateBlog(
    this: ReturnModelType<typeof Blog>,
    id: string,
    title: string,
    tags: string[],
    content: string,
  ) {
    return this.updateOne({ _id: id }, { title, tags, content })
  }
  public static async deleteBlog(
    this: ReturnModelType<typeof Blog>,
    id: string,
  ) {
    return this.deleteOne({ _id: id })
  }
  public static async searchBlogs(
    this: ReturnModelType<typeof Blog>,
    title: string,
    tags: string[],
  ) {
    return this.find({ title, tags }).exec()
  }
  public static async getBlogsByTags(
    this: ReturnModelType<typeof Blog>,
    tags: string[],
  ) {
    return this.find({ tags }).exec()
  }
  public static async getBlogsByTitle(
    this: ReturnModelType<typeof Blog>,
    title: string,
  ) {
    return this.find().where('title', new RegExp(title, 'i')).exec()
  }
}

const BlogModel = getModelForClass<typeof Blog>(Blog)
export { BlogModel, Blog }
