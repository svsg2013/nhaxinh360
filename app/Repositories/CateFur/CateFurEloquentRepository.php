<?php
/**
 * Created by PhpStorm.
 * User: LeThanh
 * Date: 10/19/2017
 * Time: 9:55 PM
 */

namespace App\Repositories\CateFur;
use App\ChildFur;
use App\CateFur;
use App\Repositories\EloquentRepository;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;


class CateFurEloquentRepository extends EloquentRepository implements CateFurRepositoryInterface
{

    public function getModel()
    {
        // TODO: Implement getModel() method.
        return \App\CateFur::class;
    }

    public function getDataMenu(){
        $cate= DB::table('cate_furs')
            ->leftjoin('child_furs','cate_furs.id','=','child_furs.cateParen_id')
            ->select('name','lvl','alias','metaName','description','weight','child_furs.cateParen_id')
            ->get();
        return $cate;
    }

    public function getCreateAndEdit($inputFile, $id=0){
				if($id==0){
				$cateData= new CateFur();
				$cateData->name= $inputFile['txtName'];
				$cateData->alias= changeTitle($inputFile['txtName']);
				// khuc !empty -> không để trống thì thực hiện tức là có nhập vào text form
				if(!empty($inputFile['txtMeta'])){
                    $cateData->metaName= $inputFile['txtMeta'];

				}else{
                    $cateData->metaName= $inputFile['txtName'];
				}
				$cateData->description= $inputFile['txtDescription'];
				$cateData->save();
					$cateChildData= new ChildFur();
					$cateChildData->cateParen_id= $cateData->id;
					$cateChildData->lvl= $inputFile['slMenu'];
					$cateChildData->save();
                    return redirect()->route('catefurniture.index')->with('thongbao','Danh mục tạo thành công');
			}else{
				$cateData= CateFur::find($id);
				$cateData->name= $inputFile['txtName'];
				$cateData->alias= changeTitle($inputFile['txtName']);
                if(!empty($inputFile['txtMeta'])){
                    $cateData->metaName= $inputFile['txtMeta'];

                }else{
                    $cateData->metaName= $inputFile['txtName'];
                }
				$cateData->description= $inputFile['txtDescription'];
				$cateData->save();
                    $getIDParent= DB::table('cate_furs')
                        ->leftjoin('child_furs','cate_furs.id','=','child_furs.cateParen_id')
                        ->select('child_furs.id')
                        ->where('child_furs.cateParen_id','=',$id)
                        ->get()->first();
					$cateChildData= ChildFur::find($getIDParent->id);
					$cateChildData->lvl= $inputFile['slMenu'];
					$cateChildData->save();
                    return redirect()->route('catefurniture.index')->with('thongbao','Danh mục thay đổi thành công');
			}

    }

    public function getDelete($id)
    {
        $categet= ChildFur::where('lvl',$id)->count();
        if($categet==0){
            $getid= CateFur::find($id);
            $getid->delete();
            return redirect()->route('furniture.index')->with('thongbao','Xóa thành công');
        }else{
            return redirect()->route('furniture.index')->with('thongbaoloi','Đây là thư mục cha không thể xóa được');
        }
    }

}