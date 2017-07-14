<form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="formHorizontalName" className="col-sm-2 control-label" >Name</label>
            <div className="col-sm-10">
              <input
              type="text"
              placeholder="Enter Name" id="formHorizontalName" className="form-control"
              onChange={
                event => this.setState({ name: event.target.value })
              }
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="formHorizontalPassword" className="col-sm-2 control-label">Campus Image</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Enter Image URL" id="formHorizontalPassword" className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="formControlsTextarea" className="col-sm-2 control-label">Campus Description</label>
            <div className="col-sm-10">
              <textarea placeholder="Enter Campus Description" id="formControlsTextarea" className="form-control">
              </textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-10 col-sm-offset-2">
              <button type="submit" className="btn btn-default">Add Campus
              </button>
            </div>
          </div>
        </form>

         style={{border: (1, 'solid', 'black')}}
